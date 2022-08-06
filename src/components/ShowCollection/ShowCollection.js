import React, { useEffect, useState } from "react";
import getCollectionNFTS from '../../tools/GetNFTCollection';
import NFT from '../NFTProfile/NFTProfile';
import { Row, Col } from 'antd';

const ShowCollection = () => {
    const collectionAddresses = "0x18c4e3748e4d7e3188301414f5e30479427de851";
    const [NFTData, setNFTData] = useState();
    let NFTs = (<></>);

    
  
    useEffect(()=>{
        async function fetchData(){
            let data = await getCollectionNFTS({collectionAddresses: collectionAddresses, limit:6})
            setNFTData(data);
        }
        fetchData();
    },[collectionAddresses]);

    console.log(NFTData);

    if(NFTData){
        NFTs = NFTData.map( x => {
            const src = 'https://ipfs.io/ipfs/'+x['image']['url'].substring(5);
            return (<Col span={6} offset={1} key={src}>
                <NFT src={src} price={(x+1)/10}/>
            </Col>)})
    }

    

    return (
        <Row style={{marginBottom:'20px'}}>
            {NFTs}
        </Row>
        );
}

export default ShowCollection;