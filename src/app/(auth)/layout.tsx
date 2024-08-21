
interface AuthLayoutPageProps {
    children: React.ReactNode
}

const AuthLayoutPage = ({children}: AuthLayoutPageProps) => {
    return ( <div className="min-h-screen flex justify-center items-center">
        {children}
    </div> );
}
 
export default AuthLayoutPage;