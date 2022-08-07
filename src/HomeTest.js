import { useGetCollection } from './Test';



const HomeTest = () =>{
    const { data, error, isLoading, isSuccess } = useGetCollection();
    

    if(isSuccess){
        console.log(data);
    }else{
        console.error(error);
    }


    return (<></>);
}

export default HomeTest;