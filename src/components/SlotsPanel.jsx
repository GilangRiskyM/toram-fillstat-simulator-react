import { memo, useState, useEffect, useCallback, useRef } from "react";
import { OPTIONS } from "../utils/constants.js";

const SlotRow = memo(({ slotIndex, slot, stat, onSlotChange }) => {
  const [selectedOption, setSelectedOption] = useState(slot.stat_data_id || 0);
  const [inputValue, setInputValue] = useState(slot.futureStat || 0);
  const [matCost, setMatCost] = useState("");
  const [inputClass, setInputClass] = useState("stat-input");
  const debounceRef = useRef(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  // Update local state when slot data changes
  useEffect(() => {
    setSelectedOption(slot.stat_data_id || 0);
    // Only update input value if it's different and not currently being edited
    if (
      slot.futureStat !== inputValue &&
      document.activeElement !==
        document.querySelector(`input[data-slot="${slotIndex}"]`)
    ) {
      setInputValue(slot.futureStat || 0);
    }
  }, [slot.stat_data_id, slot.futureStat, slotIndex, inputValue]);

  const handleOptionChange = useCallback(
    (newOptionId) => {
      setSelectedOption(newOptionId);

      if (newOptionId === 0 || newOptionId === "0") {
        setInputValue(0);
        setMatCost("");
        setInputClass("stat-input");
      }

      const result = onSlotChange(slotIndex, parseInt(newOptionId), inputValue);
      if (result) {
        setMatCost(result.matCost || "");
        updateInputClass(result.validation);
      }
    },
    [slotIndex, inputValue, onSlotChange]
  );

  const updateSimulation = useCallback(
    (cleanValue) => {
      if (selectedOption > 0) {
        const result = onSlotChange(slotIndex, selectedOption, cleanValue);
        if (result) {
          setMatCost(result.matCost || "");
          updateInputClass(result.validation);
        }
      }
    },
    [selectedOption, slotIndex, onSlotChange]
  );

  const handleInputChange = useCallback(
    (newValue) => {
      // Update state langsung karena type="number" sudah menangani validasi
      setInputValue(newValue);

      // Debounce update simulasi untuk menghindari kalkulasi berlebihan
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        updateSimulation(newValue);
      }, 100); // 100ms debounce
    },
    [updateSimulation]
  );

  const updateInputClass = useCallback((validation) => {
    if (!validation) {
      setInputClass("stat-input");
      return;
    }

    let className = "stat-input";
    if (validation.color === "red") {
      className += " invalid";
    } else if (validation.color === "gray") {
      className += " negative";
    } else {
      className += " valid";
    }
    setInputClass(className);
  }, []);

  const buildOptions = () => {
    let options = [
      <option key="0" value="0">
        PILIH STAT
      </option>,
    ];
    let lastCat = "";
    let catId = 0;

    for (let data of OPTIONS) {
      if (stat.type === "a" && data.cat === "Awaken Elements") continue;

      if (lastCat !== data.cat) {
        options.push(
          <option
            key={`cat-${catId}`}
            value="-1"
            disabled
            style={{ color: "blue" }}
          >
            &gt;-- {data.cat} --&lt;
          </option>
        );
        lastCat = data.cat;
      }

      catId++;
      options.push(
        <option key={catId} value={catId}>
          {data.name}
        </option>
      );
    }

    return options;
  };

  const isInputDisabled =
    selectedOption === 0 || selectedOption === "0" || stat.finished;

  return (
    <div className="slot-row">
      <div className="slot-number">{slotIndex + 1}</div>
      <select
        className="stat-select"
        value={selectedOption}
        onChange={(e) => handleOptionChange(e.target.value)}
        disabled={stat.finished}
      >
        {buildOptions()}
      </select>
      <input
        className={inputClass}
        type="number"
        maxLength="4"
        size="4"
        disabled={isInputDisabled}
        value={inputValue}
        data-slot={slotIndex}
        min="-999"
        max="999"
        step="1"
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <span className="mat-cost">{matCost}</span>
    </div>
  );
});

SlotRow.displayName = "SlotRow";

const SlotsPanel = memo(({ stat, onSlotChange, updateTrigger }) => {
  return (
    <div className="slots-section">
      <h3>📋 Slot Stats</h3>
      <div className="slots-container">
        {stat.slots.map((slot, index) => (
          <SlotRow
            key={`${index}-${updateTrigger}`}
            slotIndex={index}
            slot={slot}
            stat={stat}
            onSlotChange={onSlotChange}
          />
        ))}
      </div>
    </div>
  );
});

SlotsPanel.displayName = "SlotsPanel";

export default SlotsPanel;
