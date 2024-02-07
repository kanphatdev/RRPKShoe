const ProfileNav = () => {
    return (
        <div className="navbar bg-base-100 flex flex-col sm:flex-row items-center justify-between px-4 py-2">
            <div className="flex items-center">
                <div className="dropdown dropdown-end">
                    <div role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://images.unsplash.com/photo-1512099053734-e6767b535838?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                    </div>
                </div>
                <h1 className="font-bold capitalize ml-2 sm:ml-0">kong jam</h1>
            </div>
        </div>
    );
};

export default ProfileNav;
