# Toram Fill Stats Simulator - React Migration

This is a React + Vite migration of the original Toram Fill Stats Simulator from vanilla HTML/JavaScript.

## 🚀 Features

- **Modern React Architecture**: Migrated from vanilla JavaScript to React with functional components and hooks
- **Fast Development**: Using Vite for lightning-fast hot module replacement
- **Component-based Structure**: Clean separation of concerns with reusable components
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Local Storage**: Automatic saving and loading of settings and simulation state
- **TypeScript Ready**: Easy to migrate to TypeScript if needed

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── SettingsPanel.jsx   # Configuration panel
│   ├── SlotsPanel.jsx      # Stat slots interface
│   └── ResultsPanel.jsx    # Results and material costs
├── utils/               # Core simulation logic
│   ├── constants.js        # Game constants and stat options
│   ├── math.js            # Mathematical calculations
│   └── simulation.js      # Core simulation classes
├── App.jsx             # Main application component
├── App.css             # Application styles
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## 🛠️ Installation & Setup

1. **Clone or navigate to the project directory**

   ```bash
   cd toram-fillstat-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173/`

## 🎮 How to Use

1. **Configure Settings**:

   - Select item type (Weapon/Armor)
   - Enter starting potential (POT)
   - Set recipe potential
   - Adjust TEC and proficiency values
   - Enable material reduction if applicable

2. **Start Simulation**:

   - Click "🚀 Mulai Simulasi" to begin
   - The workspace will appear with 8 stat slots

3. **Choose Stats**:

   - Select desired stats from dropdown menus
   - Enter target values for each stat
   - View material costs in real-time

4. **Execute Steps**:

   - Click "✅ Confirm" to execute current configuration
   - Use "🔄 Repeat" to repeat the last step
   - Use "↶ Undo" and "↷ Redo" for step management

5. **View Results**:
   - Monitor potential changes and success rates
   - Track material costs and requirements
   - View step-by-step formula breakdown

## 🔄 Migration Changes

### From Vanilla JavaScript to React

1. **State Management**:

   - DOM manipulation replaced with React state
   - Event handlers converted to React event props
   - Form inputs controlled by React state

2. **Component Structure**:

   - Monolithic HTML file split into modular components
   - Separation of concerns between settings, slots, and results
   - Reusable components with proper prop interfaces

3. **Modern ES6+ Features**:

   - ES6 modules instead of global variables
   - Arrow functions and modern JavaScript syntax
   - Destructuring and spread operators

4. **Performance Optimizations**:
   - React.memo for component memoization
   - useMemo and useCallback for expensive calculations
   - Efficient re-rendering strategies

### Core Logic Preservation

- **Simulation Engine**: All original calculation logic preserved
- **Game Mechanics**: Exact same formulas and stat calculations
- **Material Costs**: Identical cost calculation algorithms
- **Success Rates**: Same potential and success rate formulas

## 🎯 Key Features

### Settings Panel

- Item type selection (Weapon/Armor)
- Starting and recipe potential configuration
- TEC and proficiency settings
- Material reduction toggle

### Slots Panel

- 8 configurable stat slots
- Categorized stat selection
- Real-time validation and visual feedback
- Material cost display per slot

### Results Panel

- Live potential and success rate calculation
- Step-by-step formula display
- Material cost breakdown
- Undo/redo functionality
- Step repetition capability

## 🎨 Styling

- **Modern CSS**: Grid and Flexbox layouts
- **JetBrains Mono Font**: Consistent with original design
- **Responsive Design**: Mobile-first approach
- **Color Coding**: Visual feedback for validation states
- **Hover Effects**: Interactive button and input states

## 📱 Mobile Support

- Responsive grid layouts that stack on mobile
- Touch-friendly button sizes
- Optimized input controls for mobile devices
- Flexible font sizes and spacing

## 🔧 Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

### Adding New Features

1. Create new components in `src/components/`
2. Add utility functions in `src/utils/`
3. Update the main App component to integrate
4. Add corresponding CSS styles

### Customization

- Modify `src/utils/constants.js` for game data changes
- Update `src/App.css` for styling modifications
- Extend components for additional functionality

## 🚀 Production Deployment

1. **Build the application**:

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your web server

3. **Static hosting options**:
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static file hosting service

## 🔍 Troubleshooting

### Common Issues

1. **Stats not loading**: Check browser console for JavaScript errors
2. **Calculations incorrect**: Verify constants in `utils/constants.js`
3. **UI not responsive**: Check CSS Grid and Flexbox compatibility
4. **Local storage issues**: Clear browser storage and retry

### Debug Mode

Add `?debug=true` to the URL to enable console logging for development debugging.

## 📋 TODO / Future Enhancements

- [ ] Add TypeScript support
- [ ] Implement unit tests with Vitest
- [ ] Add simulation history/save slots
- [ ] Export/import simulation configurations
- [ ] Advanced automation features
- [ ] PWA support for offline usage
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Stat comparison tools

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project maintains the same license as the original implementation.

## 🙏 Credits

- Original vanilla JavaScript implementation by the Toram community
- React migration and modernization
- Based on Toram Online game mechanics

---

**Note**: This is a simulation tool and results may vary from actual in-game outcomes. Always verify critical builds in-game before committing resources.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
