import React from "react";
import {useCollectionNFTS,getCollectionData} from '../../tools/GetNFTCollection';
import NFT from '../NFT/NFT';
import { Row, Col } from 'antd';
import './ShowCollection.css'

const ShowCollection = () => {
    const collectionAddresses = "0xe785E82358879F061BC3dcAC6f0444462D4b5330";
    const CollectionData = getCollectionData(collectionAddresses);
    const NFTData = useCollectionNFTS({collectionAddresses: collectionAddresses});
    let NFTs, NFTs2, NFTs3 = (<></>);

    //console.log(CollectionData);


    //console.log(NFTData);

    const NFTsClass1 = NFTData.filter(x => {
        const Type = x.token.attributes.filter(x=>x.traitType=="Mouth")[0]['value']
        if(Type=="Surprised"){
            return x;
        }
    })
    console.log(NFTsClass1);


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