const UserTabel = ({ data }) => {
	return (
		<table className="max-w-5xl mx-auto ">
			<tbody>
				<tr className=" ">
					<th className="text-left pr-20 mr-10 ">First Name</th>
					<th className="text-left pr-20 mr-10 ">Last Name</th>
					<th className="text-left pr-20 mr-10 ">Email</th>
					<th className="text-left pr-20 mr-10 ">Gender</th>
				</tr>
				{data.map((user) => (
					<tr key={user.id} className="even:bg-indigo-100">
						<td className="text-left mr-7">{user.first_name}</td>
						<td className="text-left mr-7">{user.last_name}</td>
						<td className="text-left mr-7">{user.email}</td>
						<td className="text-left mr-7">{user.gender}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default UserTabel;
