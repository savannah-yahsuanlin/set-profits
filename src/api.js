const fetchCompanies = async() => {
	const response = await fetch('https://www.acme-api.com/api/companies')
	const json = await response.json()
	return json
}

const fetchProfits = async(id) => {
	const response = await fetch(`https://www.acme-api.com/api/companies/${id}/companyProfits`)
	const json = await response.json()
	return json
}

export { fetchCompanies, fetchProfits }