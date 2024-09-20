
import logo from './logo.svg';
import './App.css';
import First from './First';
import './first.css'
import CustomerAchievements from './Second';
import CashApplication from './Third';
import CashApplicationProcess from './Fourth';
import CashApplicationFeatures from './Fifth';
import Footer from './sixth';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <First />
       <CustomerAchievements />
       <CashApplication />
       <CashApplicationProcess />
       <CashApplicationFeatures />
       <Footer />
      </header>
    </div>
  );
}

export default App;

