import classnames from 'classnames'
import './App.scss'

function App() {
  return (
    <div className="App">
      <div
        className={classnames({
          'loader-circle': true,
          'loader-circle--empty': false,
          // [className]: 'className',
        })}
      >
        <svg
          className={classnames({loader: true, 'loader--rotation': true})}
          viewBox="0 0 24 24"
          style={{['--loading']: 75}}
        >
          <circle className="loader__circle" cx="12" cy="12" r="9" />
          <circle
            className="loader__circle loader__circle--inset"
            cx="12"
            cy="12"
            r="9"
          />
        </svg>
        <span className="loader-circle__text"></span>
      </div>
    </div>
  )
}

export default App
