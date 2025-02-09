import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage"
import NoticesPage from "./pages/ReferData/NoticesShow"
import CompaniesPage from "./pages/ReferData/CompaniesShow"
import BidsPage from "./pages/ReferData/BidsShow"
import ByCompanyPage from "./pages/AnalyzeData/ByCompanyPage"
import ByNoticePage from "./pages/AnalyzeData/ByNoticePage.jsx"

function App() {
	return (
		<Router>
			<div className="container mx-auto">
				<Routes>
					<Route path="/" element={<MainPage/>}/>
					<Route path="/origin-data/notices" element={<NoticesPage/>}/>
					<Route path="/origin-data/companies" element={<CompaniesPage/>}/>
					<Route path="/origin-data/bids" element={<BidsPage/>}/>
					<Route path="/analyze/by-notice" element={<ByNoticePage/>}/>
					<Route path="/analyze/by-company" element={<ByCompanyPage/>}/>
				</Routes>
			</div>
		</Router>
	)
}

export default App
