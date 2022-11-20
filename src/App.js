import Info from "./components/info.js"
import About from "./components/about.js"
import Interest from "./components/interest.js"
import Footer from "./components/footer.js"
import "./index.css"
export default function App() {
  return (
    <div className='card'>
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}

