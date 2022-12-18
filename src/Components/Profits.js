import React from "react";


const Profits = ({profits}) => {
	return (
		<div>
			{
				profits.map(profit => {
					return (
						<div>
							{profit.amount}
						</div>
					)
				})
			}
		</div>
	)
}




export default Profits;