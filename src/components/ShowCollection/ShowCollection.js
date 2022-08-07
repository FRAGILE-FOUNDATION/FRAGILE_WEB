import React from "react";
import {useCollectionNFTS,getCollectionData} from '../../tools/GetNFTCollection';
import NFT from '../NFT/NFT';
import { Row, Col } from 'antd';
import './ShowCollection.css'
import CampaigneProgressBar from "../campaigneProgressBar/CampaigneProgressBar";

const ShowCollection = () => {
    const collectionAddresses = "0xe785E82358879F061BC3dcAC6f0444462D4b5330";
    const CollectionData = getCollectionData(collectionAddresses);
    const NFTData = useCollectionNFTS({collectionAddresses: collectionAddresses});
    let NFTs, NFTs2, NFTs3 = (<></>);

    //console.log(CollectionData);


    //console.log(NFTData);

    const NFTsClass1 = NFTData.filter(x => {
        const Type = x.token.attributes.filter(x=>x.traitType==="Mouth")[0]['value']
        if(Type==="Surprised"){
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
        <div>
            <div className="drop-info">
                <span className="drop-number"><b>drop 001</b></span>
                <div  className="drop-topic"> <b>🇺🇦 War in Ukraine</b></div>
                <h1 className="drop-header">Ukraine Resistance</h1>
               
                    <div className="sub-info">
                        <div className="left-info">
                        <h2 className="drop-description"> Technology can accelerate the efforts tostop the war in Ukraine and prevent worsening of the humanitarian crisis. Help Ukrainians fight the cause of the crisis, not just its consequences. </h2>
            
            <CampaigneProgressBar className="progress-bar-component"></CampaigneProgressBar>
                        </div>

                        <div className="right-info">
                                                        <div className="drop-organisation-info">
                                                        <b className="drop-organisation-name"> KOLO </b><br/>
                                                        <span>Fundraiser • koloua.com • 0xa93b...9bdhd </span><br/><br/>
                                                        <span>Ukrainian tech-focused non-profit 
                                Raised $4,000,000 from a community of 2,000 people
                                100% goes to purchase of optics, air and communications for UA resistance </span>
                                                    </div>
                                                    

                        </div>
                   
                   

                    </div>
           
            </div>
        <Row className="showCase">
            <Row>{NFTs}</Row>
            <Row>{NFTs2}</Row>
            <Row>{NFTs3}</Row>
        </Row>
        </div>
        );
}

export default ShowCollection;
