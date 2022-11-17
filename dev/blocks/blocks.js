export default [
	/**
	 * General Blocks
	 */
	{
		id: "company-header",
		label: "Company Header",
		media: `<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM7 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm7-2.75V5h4.75A2.25 2.25 0 0 1 21 7.25v13.5a.75.75 0 0 1-.75.75h-3v-2.75a.5.5 0 0 0-.5-.5h-2.5a.5.5 0 0 0-.5.5v2.75h-10a.75.75 0 0 1-.75-.75V4.25A2.25 2.25 0 0 1 5.25 2h6.5A2.25 2.25 0 0 1 14 4.25ZM5.25 3.5a.75.75 0 0 0-.75.75V20H10V7.25A2.25 2.25 0 0 1 12.25 5h.25v-.75a.75.75 0 0 0-.75-.75h-6.5ZM18 15a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4-4a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4-4a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"/></svg>`,
		attributes: { class: "gjs-block-section" },
		content: `
		<header>
				<h2 style="margin-bottom: 5px; font-size: 16px"  data-property="company.company_name" >[Company Name]</h2>
				<small><span  data-property="branch.branch_name">[Branch Name]</span>, <span data-property="branch.branch_address">[Branch Address]</span>, <span  data-property="branch.branch_telephone">[Branch Telephone]</span></small>
				<h1 style="font-size: 16px; margin-top: 5px;margin-bottom: 7px">DOCUMENT TITLE HERE!</h1>
		</header>
		`,
		category: "Global",
	},
	// Company header
	{
		id: "company-header-2",
		label: "Company Header 2",
		category: "Global",
		media: `<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-1-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm1-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM7 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm7-2.75V5h4.75A2.25 2.25 0 0 1 21 7.25v13.5a.75.75 0 0 1-.75.75h-3v-2.75a.5.5 0 0 0-.5-.5h-2.5a.5.5 0 0 0-.5.5v2.75h-10a.75.75 0 0 1-.75-.75V4.25A2.25 2.25 0 0 1 5.25 2h6.5A2.25 2.25 0 0 1 14 4.25ZM5.25 3.5a.75.75 0 0 0-.75.75V20H10V7.25A2.25 2.25 0 0 1 12.25 5h.25v-.75a.75.75 0 0 0-.75-.75h-6.5ZM18 15a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4-4a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4-4a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"/></svg>`,
		content: `
        <div style="display: flex; justify-content: space-between;">
			<div>
				<img
					src="https://picsum.photos/200/300"
					alt="Company Logo"
					style="height: 170px; width: 300px; border-radius: 10px;"
				/>
			</div>
			<div style="text-align: right;">
				<h2 style="font-weight: 700; font-size: 22PX;">[COMPANY_NAME]</h2>
				<p style="margin-bottom: -7px;">[COMPANY_STREET]</p>
				<p style="margin-bottom: -7px;">[COMPANY_CITY]</p>
				<p style="margin-bottom: -7px;">[COMPANY_PROVINCE], [COMPANY_COUNTRY]</p>
				<p><a style="color: #409ED6;" href="[COMPANY_WEBSITE]">[COMPANY_WEBSITE]</a></p>
			</div>
		</div>
        `,
	},
	// subheader
	{
		id: "subheader-block",
		category: "Global",
		label: "Subheader 1",
		media: `<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75v-9.5A3.25 3.25 0 0 0 18.75 4H5.25Z"/></svg>`,
		content: `
		<div
		style="width: 100%; border-radius: 5px ; height: 70px; display: flex; justify-content: center; align-items: center;"
		>
			<h2 style="font-weight: 700;">Subheader Details</h2>
		</div>
		`,
	},
	{
		id: "member-name",
		label: "Account Holder Name",
		media: `<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13 14.05V14H4.253a2.249 2.249 0 0 0-2.25 2.249v.92c0 .572.18 1.13.511 1.596C4.056 20.929 6.58 22 10 22c.358 0 .706-.012 1.043-.035A2.518 2.518 0 0 1 11 21.5v-5a2.5 2.5 0 0 1 2-2.45ZM10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10ZM14 15h-.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5H21v-1.25A1.75 1.75 0 0 0 19.25 12h-3.5A1.75 1.75 0 0 0 14 13.75V15Zm1.5-1.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25V15h-4v-1.25Z"/></svg>`,
		attributes: { class: "gjs-block-section" },
		content: `
				<span  data-property="account_holder.full_name">[Member Name Here]</span>
		`,
		category: "Personal Components",
	},
	{
		id: "members-name",
		label: "Account Holder Names",
		media: `<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13 14.05V14H4.253a2.249 2.249 0 0 0-2.25 2.249v.92c0 .572.18 1.13.511 1.596C4.056 20.929 6.58 22 10 22c.358 0 .706-.012 1.043-.035A2.518 2.518 0 0 1 11 21.5v-5a2.5 2.5 0 0 1 2-2.45ZM10 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10ZM14 15h-.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5H21v-1.25A1.75 1.75 0 0 0 19.25 12h-3.5A1.75 1.75 0 0 0 14 13.75V15Zm1.5-1.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25V15h-4v-1.25Z"/></svg>`,
		attributes: { class: "gjs-block-section" },
		content: `
				<span data-property="names" data-default="N/A" data-seperator=", ">
					<span data-value>[Account Holder Names]</span>
				</span>
		`,
		category: "Personal Components",
	},
	{
		id: "loan-details-list",
		label: "Loan Details List",
		media: "<i class='fa fa-list-ul fa-3x'> </i>",
		attributes: {},
		content: `
		<div style="font-size: 14px">
		 <p style="margin-top: 0px; margin-bottom: 3px;">Loan Amount: <span data-property="loan.total_amount">[Loan Ammount]</span></p>
		 <p style="margin-top: 0px; margin-bottom: 3px;">Tenure: <span data-property="loan.tenure">[Tenure]</span></p>
		 <p style="margin-top: 0px; margin-bottom: 3px;">Interest: <span data-property="loan.interest">[Interest]</span></p>
		 <p style="margin-top: 0px; margin-bottom: 3px;">Payment: <span data-property="loan.payment">[Loan Payment]</span></p>
		 <p style="margin-top: 0px; margin-bottom: 3px;">Payment Frequency: <span data-property="loan.payment_frequency">[Payment Frequency]</span></p>
		</div>
		 `,
		category: "Loan Components",
	},

	{
		id: "cash-collateral-details",
		label: "Cash Collateral Details",
		media: "<i class='fa fa-money fa-3x'> </i>",
		attributes: {},
		content: `
		<table data-property="collateral.cash_collaterals" style="width: 100%; border-spacing: 0; border-collapse: collapse; font-size: 12px; text-align: left" border="1"  cellpadding="1">
			<caption style="text-align: left; margin-bottom: 5px"><b>Cash Collaterals</b></caption>
			<thead>
				<tr>
					<th data-key="account_holder.address"  style="width: 20%;">&nbsp;Account Holder</th>
					<th data-key="account_number"  style="width: 12%;">&nbsp;Account No</th>
					<th data-key="account_type" style="width: 16%;">&nbsp;Account Type</th>
					<th data-key="total_value" style="width: 11%;">&nbsp;Total Value</th>
					<th data-key="amount_pledged"  style="width: 16%;">Amount Pledged</th>
					<th data-key="institution" style="width: 25%;">&nbsp;Institution Name</th>
				</tr>
			</thead>
		</table>
		`,
		category: "Loan Components",
	},
];
