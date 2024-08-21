interface SettingsPageProps {
    params : {
        slug: string
    }
}

const SettingsPage = ({params} : SettingsPageProps) => {
    return ( <div>
        Settings page param : {params.slug}
    </div> );
}
 
export default SettingsPage;