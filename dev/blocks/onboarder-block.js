export default [
	// Full signature block
	{
		id: "signature-block",
		category: "Signatures",
		label: "Full Signature",
		media: `<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14.75 16.5c1.308 0 1.818.583 2.205 1.875l.068.237c.183.657.292.854.513.945c.259.107.431.092.703-.048l.147-.082c.053-.032.11-.069.176-.112l.663-.451c.616-.405 1.17-.673 1.843-.841a.75.75 0 0 1 .364 1.455a4.03 4.03 0 0 0-1.146.49l-.298.19l-.48.328a5.45 5.45 0 0 1-.583.357c-.643.33-1.27.386-1.96.1c-.746-.306-1.046-.779-1.327-1.72l-.156-.543c-.181-.589-.305-.68-.732-.68c-.31 0-.63.155-1.069.523l-.184.161l-.921.875c-1.408 1.324-2.609 1.967-4.328 1.967c-1.686 0-3.144-.254-4.368-.769l2.947-.804c.447.048.921.073 1.421.073c1.183 0 2.032-.415 3.087-1.363l.258-.239l.532-.51c.236-.227.414-.39.592-.54c.684-.573 1.305-.874 2.033-.874Zm4.28-13.53a3.579 3.579 0 0 1 0 5.06l-.288.29c1.151 1.4 1.11 2.886.039 3.96l-2.001 2a.75.75 0 0 1-1.06-1.062l1.999-1.998c.485-.487.54-1.09-.04-1.839L9.062 18a2.25 2.25 0 0 1-1 .58l-5.115 1.395a.75.75 0 0 1-.92-.921l1.394-5.116a2.25 2.25 0 0 1 .58-.999L13.97 2.97a3.578 3.578 0 0 1 5.061 0Z"/></svg>`,
		content: `
		<div
			style="display: flex; justify-content: space-between; align-items: center; gap: 50px; padding: 0px 10px;"
		>
		<div style="display: flex; flex-direction: column; width: 100%;">
			<p style="font-weight: 700; margin-bottom: -0px; text-align: center;">[APPLICANT_NAME]</p>
			<hr style="border-bottom: 1px solid; width: 100%; margin-bottom: -5px;" />
			<p style="text-align: center;">Name of Applicant</p>
		</div>
		<div style="display: flex; flex-direction: column; width: 100%;">
			<p style="font-weight: 700; margin-bottom: -0px;">&nbsp;</p>
			<hr style="border-bottom: 1px solid; width: 100%; margin-bottom: -5px;" />
			<p style="text-align: center;">Signature of Applicant</p>
		</div>
		<div style="display: flex; flex-direction: column; width: 100%;">
			<p style="font-weight: 700; margin-bottom: -0px;">&nbsp;</p>
			<hr style="border-bottom: 1px solid; width: 100%; margin-bottom: -5px;" />
			<p style="text-align: center;">Signature of Witness</p>
		</div>
	</div>
		`,
	},
	//  Single signature with Name placeholder
	{
		id: "single-signature-name-block",
		category: "Signatures",
		label: "Single Signature w/ Name",
		media: `<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14.75 16.5c1.308 0 1.818.583 2.205 1.875l.068.237c.183.657.292.854.513.945c.259.107.431.092.703-.048l.147-.082c.053-.032.11-.069.176-.112l.663-.451c.616-.405 1.17-.673 1.843-.841a.75.75 0 0 1 .364 1.455a4.03 4.03 0 0 0-1.146.49l-.298.19l-.48.328a5.45 5.45 0 0 1-.583.357c-.643.33-1.27.386-1.96.1c-.746-.306-1.046-.779-1.327-1.72l-.156-.543c-.181-.589-.305-.68-.732-.68c-.31 0-.63.155-1.069.523l-.184.161l-.921.875c-1.408 1.324-2.609 1.967-4.328 1.967c-1.686 0-3.144-.254-4.368-.769l2.947-.804c.447.048.921.073 1.421.073c1.183 0 2.032-.415 3.087-1.363l.258-.239l.532-.51c.236-.227.414-.39.592-.54c.684-.573 1.305-.874 2.033-.874Zm4.28-13.53a3.579 3.579 0 0 1 0 5.06l-.288.29c1.151 1.4 1.11 2.886.039 3.96l-2.001 2a.75.75 0 0 1-1.06-1.062l1.999-1.998c.485-.487.54-1.09-.04-1.839L9.062 18a2.25 2.25 0 0 1-1 .58l-5.115 1.395a.75.75 0 0 1-.92-.921l1.394-5.116a2.25 2.25 0 0 1 .58-.999L13.97 2.97a3.578 3.578 0 0 1 5.061 0Zm-4 1.06L5.062 14a.75.75 0 0 0-.193.333l-1.05 3.85l3.85-1.05A.75.75 0 0 0 8 16.938l9.97-9.968a2.078 2.078 0 1 0-2.94-2.94Z"/></svg>`,
		content: `
		<div style="display: flex; flex-direction: column; width: 100%;">
			<p style="font-weight: 700; margin-bottom: -0px; text-align: center;">[APPLICANT_NAME]</p>
			<hr style="border-bottom: 1px solid; width: 100%; margin-bottom: -5px;" />
			<p style="text-align: center;">Name of Applicant</p>
		</div>
		`,
	},
	// Single signature with no name in it
	{
		id: "single-signature-blank-block",
		category: "Signatures",
		label: "Single Signature Blank",
		media: `<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14.75 16.5c1.308 0 1.818.583 2.205 1.875l.068.237c.183.657.292.854.513.945c.259.107.431.092.703-.048l.147-.082c.053-.032.11-.069.176-.112l.663-.451c.616-.405 1.17-.673 1.843-.841a.75.75 0 0 1 .364 1.455a4.03 4.03 0 0 0-1.146.49l-.298.19l-.48.328a5.45 5.45 0 0 1-.583.357c-.643.33-1.27.386-1.96.1c-.746-.306-1.046-.779-1.327-1.72l-.156-.543c-.181-.589-.305-.68-.732-.68c-.31 0-.63.155-1.069.523l-.184.161l-.921.875c-1.408 1.324-2.609 1.967-4.328 1.967c-1.686 0-3.144-.254-4.368-.769l2.947-.804c.447.048.921.073 1.421.073c1.183 0 2.032-.415 3.087-1.363l.258-.239l.532-.51c.236-.227.414-.39.592-.54c.684-.573 1.305-.874 2.033-.874Zm4.28-13.53a3.579 3.579 0 0 1 0 5.06l-.288.29c1.151 1.4 1.11 2.886.039 3.96l-2.001 2a.75.75 0 0 1-1.06-1.062l1.999-1.998c.485-.487.54-1.09-.04-1.839L9.062 18a2.25 2.25 0 0 1-1 .58l-5.115 1.395a.75.75 0 0 1-.92-.921l1.394-5.116a2.25 2.25 0 0 1 .58-.999L13.97 2.97a3.578 3.578 0 0 1 5.061 0Zm-4 1.06L5.062 14a.75.75 0 0 0-.193.333l-1.05 3.85l3.85-1.05A.75.75 0 0 0 8 16.938l9.97-9.968a2.078 2.078 0 1 0-2.94-2.94Z"/></svg>`,
		content: `
		<div style="display: flex; flex-direction: column; width: 100%;">
			<p style="font-weight: 700; margin-bottom: -0px;">&nbsp;</p>
			<hr style="border-bottom: 1px solid; width: 100%; margin-bottom: -5px;" />
			<p style="text-align: center;">Signature of Applicant</p>
		</div>
		`,
	},
	// Application type and class
	{
		id: "app-type",
		category: "Global",
		label: "App Type & Class",
		media: `<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m2.753 11.996l2.5.011a.75.75 0 0 1 .095 1.494l-.102.006l-1.746-.009v5.501L5.25 19a.75.75 0 0 1 .742.648L6 19.75a.75.75 0 0 1-.648.743l-.102.007h-2.5a.75.75 0 0 1-.742-.648L2 19.75v-7.004a.75.75 0 0 1 .651-.744l.102-.006ZM21.245 17.5a.75.75 0 0 1 .102 1.493l-.102.007H7.748a.75.75 0 0 1-.101-1.493l.101-.007h13.497Zm0-4a.75.75 0 0 1 .102 1.493l-.102.007H7.748a.75.75 0 0 1-.101-1.493l.101-.007h13.497ZM2.753 2.5l2.5.011a.75.75 0 0 1 .095 1.494l-.102.006L3.5 4.003v5.492h1.75a.75.75 0 0 1 .742.648l.007.102a.75.75 0 0 1-.648.743l-.102.007h-2.5a.75.75 0 0 1-.742-.648L2 10.245V3.25a.75.75 0 0 1 .651-.744l.102-.006Zm18.492 5.504a.75.75 0 0 1 .102 1.493l-.102.007H7.748a.75.75 0 0 1-.101-1.493l.101-.007h13.497Zm.005-4a.75.75 0 0 1 .102 1.493l-.102.007H7.754a.75.75 0 0 1-.102-1.493l.102-.007H21.25Z"/></svg>`,
		content: `
		<div style="width: 100%; padding: 5px;">
			<div>
				<span>Application Type: <b>[APPLICATION_TYPE]</b></span>
			</div>
			<div>
				<span>Application Class: <b>[APPLICATION_CLASS]</b></span>
			</div>
		</div>
		`,
	},
];
