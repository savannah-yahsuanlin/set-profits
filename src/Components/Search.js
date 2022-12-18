import React, { useState, useEffect } from 'react';
import { fetchCompanies, fetchProfits } from '../api';


const Search = (props) => {
	const setProfits = props.setProfits;
	const [companies, setCompanies] = useState([])
	const [companyId, setCompanyId] = useState('')

	useEffect(() => {
		fetchCompanies()
			.then(company => setCompanies(company))
	}, [])

	return (
		<div>
			<form onSubmit={
				async(ev) => {
					ev.preventDefault()
					if(companyId) {
						const money = await fetchProfits(companyId)
						setProfits(money)
					} else {
						setProfits([])
					}
				}
			}>
			<select onChange={ev => setCompanyId(ev.target.value)}>
				<option value=''>Choose Company</option>
				{
					companies.map(company => {
						return (
						<option key={company.id} value={company.id}>{company.name}</option>
						)
					})
				}
			</select>
			<button>Revenue</button>
			</form>
		</div>
	)
}


export default Search;