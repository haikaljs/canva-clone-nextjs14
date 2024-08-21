interface SlugPageProps {
params : {
    slug: string
}
}


const SlugPage = ({params}: SlugPageProps) => {
    return (<div>
        Slug Page param :{params.slug}
    </div> );
}
 
export default SlugPage;