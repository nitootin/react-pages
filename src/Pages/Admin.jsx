const Admin = () => {

    return(
        <div id="admin">
            <div className="admin-left">
                <ul>
                    <li><Link to={"usuarios"}>Gerenciar usuarios</Link></li>
                    <li><Link to={"configuracoes"}>COnfiguracoes do sistema</Link></li>
                </ul>
            </div>
            <div className="admin-right">
                <h1>Painel adm</h1>
                <Outlet />

            </div>
        </div>

       


    );

}

export default Admin;