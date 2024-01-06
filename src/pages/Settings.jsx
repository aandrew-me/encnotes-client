function Settings() {
	return (
		<>
			{/* Go back */}
			<div className="absolute top-3 left-2 items-center rounded border border-indigo-600 bg-indigo-600 px-2 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 inline-block">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="w-6 h-6 inline"
				>
					<path
						fillRule="evenodd"
						d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
						clipRule="evenodd"
					/>
				</svg>

				<a href="/notes" className="p-1">Notes</a>
			</div>
			<div className="flex flex-col items-center text-center">
				<h1 className="p-5">Settings</h1>

				<div className="bg-bg-secondary p-6 m-2 rounded-md lg:w-1/2 sm:w-10/12">
					<p className="text-xl mb-2 font-bold">Email</p>
					<p>aandrew.me@proton.me</p>
				</div>

				<div className="bg-bg-secondary p-6 m-2 rounded-md lg:w-1/2 sm:w-10/12">
					<p className="text-xl mb-2 font-bold">Change Password</p>

					<br />
					<label
						htmlFor="Password"
						className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 cursor-text"
					>
						<input
							type="password"
							id="Password"
							placeholder="Current Password"
							className="peer h-8 w-full border-none bg-transparent p-2 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
						/>

						<span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
							Current Password
						</span>
					</label>

					<br />
					<label
						htmlFor="NewPassword"
						className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 cursor-text"
					>
						<input
							type="password"
							id="NewPassword"
							placeholder="New Password"
							className="peer h-8 w-full border-none bg-transparent p-2 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
						/>

						<span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
							New Password
						</span>
					</label>

					<br />
					<label
						htmlFor="ConfirmNewPassword"
						className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 cursor-text"
					>
						<input
							type="password"
							id="ConfirmNewPassword"
							placeholder="New Password"
							className="peer h-8 w-full border-none bg-transparent p-2 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
						/>

						<span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
							Confirm New Password
						</span>
					</label>
					<br />

					<button className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600">
						Change Password
					</button>
				</div>

				<div className="bg-bg-secondary p-6 m-2 rounded-md lg:w-1/2 sm:w-10/12">
					<p>View all User data stored in Database</p>
					<br />
					<a
						href="/raw"
						className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600"
					>
						View Raw Data
					</a>
				</div>

				<div className="bg-bg-secondary p-6 m-2 rounded-md lg:w-1/2 sm:w-10/12">
					<p>Delete your Account and all your Data</p>
					<br />
					<button className="inline-block rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-600">
						Delete Account
					</button>
				</div>
			</div>
		</>
	);
}

export default Settings;
