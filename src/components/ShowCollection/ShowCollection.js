import React, { useEffect, useState } from "react";
import getCollectionNFTS from '../../tools/GetNFTCollection';
import NFT from '../NFT/NFT';
import { Row, Col } from 'antd';
import './ShowCollection.css'

const ShowCollection = () => {
    const collectionAddresses = "0x18c4e3748e4d7e3188301414f5e30479427de851";
    const [NFTData, setNFTData] = useState();
    let NFTs, NFTs2, NFTs3 = (<></>);

    useEffect(()=>{
        async function fetchData(){
            let data = await getCollectionNFTS({collectionAddresses: collectionAddresses, limit:6})
            setNFTData(data);
        }
        fetchData();
    },[collectionAddresses]);

    console.log(NFTData);

    if(NFTData){
        //NFTs = NFTData.map( x => {
        //    const src = 'https://ipfs.io/ipfs/'+x['image']['url'].substring(5);
        //    return (<Col span={4} offset={1} key={src}>
        //        <NFT src={src} payload={{footer:true, price: "1.2"}}/>
        //    </Col>)})
        let src= 'https://picsum.photos/2000/3001';
        NFTs = (<>
            <Col span={4} offset={1} key={src}>
                <NFT src={src} payload={{footer:true, price: "1.2"}}/>
            </Col>
            <Col span={4} offset={2} key={src}>
                <NFT src={src} payload={{footer:true, price: "1.2"}}/>
            </Col>
            <Col span={4} offset={2} key={src}>
                <NFT src={src} payload={{footer:true, price: "1.2"}}/>
            </Col>
        </>)

        src= 'https://picsum.photos/2000/2002';
        NFTs2 = (<>
            <Col span={4} offset={1} key={src}>
                <NFT src={src} payload={{footer:true, price: "1.2"}}/>
            </Col>
            <Col span={4} offset={2} key={src}>
                <NFT src={src} payload={{footer:true, price: "1.2"}}/>
            </Col>
            <Col span={4} offset={2} key={src}>
                <NFT src={src} payload={{footer:true, price: "1.2"}}/>
            </Col>
            <Col span={4} offset={2} key={src}>
                <NFT src={src} payload={{footer:true, price: "1.2"}}/>
            </Col>
        </>)

        src= 'https://picsum.photos/2000/2003';
        NFTs3 = (<>
            <Col span={3} offset={1} key={src}>
                <NFT src={src} payload={{footer:true, price: "1.2"}}/>
            </Col>
            <Col span={3} offset={1} key={src}>
                <NFT src={src} payload={{footer:true, price: "1.2"}}/>
            </Col>
            <Col span={3} offset={1} key={src}>
                <NFT src={src} payload={{footer:true, price: "1.2"}}/>
            </Col>
            <Col span={3} offset={1} key={src}>
                <NFT src={src} payload={{footer:true, price: "1.2"}}/>
            </Col>
            <Col span={3} offset={1} key={src}>
                <NFT src={src} payload={{footer:true, price: "1.2"}}/>
            </Col>
        </>)
    }

    

    return (
        <Row className="showCase">
            <Row>{NFTs}</Row>
            <Row>{NFTs2}</Row>
            <Row>{NFTs3}</Row>
        </Row>
        );
}

export default ShowCollection;