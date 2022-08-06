import { useState, useEffect } from "react"
import { utils } from "ethers"
import { useContractWrite, useSwitchNetwork, useNetwork, useConnect } from "wagmi"
import { InjectedConnector } from 'wagmi/connectors/injected'

const ZoraNFTCreatorProxy_ADDRESS_RINKEBY = "0x2d2acD205bd6d9D0B3E79990e093768375AD3a30"

const CreateDrop = () => {

    const [dropInputs, setDropInputs] = useState({
        contractName: "Example Drop",
        contractSymbol: "DROP",
        contractAdmin: "0x153D2A196dc8f1F6b9Aa87241864B3e4d4FEc170",
        contractMaxSupply: "100",
        secondaryRoyalties: "500",
        fundsRecipient: "0x153D2A196dc8f1F6b9Aa87241864B3e4d4FEc170",
        salesConfig: {
          priceEther: "0.001",
          perWalletMintCap: "5",
          publicSaleStart: "0", // makes it so edition will be live to start 
          publicSaleEnd: "5000000000000", // makes it so edition will be live to start
          presaleStart: "0",
          presaleEnd: "0",
          presaleMerkleRoot: "0x0000000000000000000000000000000000000000000000000000000000000000"
        },
        metadataURIBase: "uribase/",
        metadtaContractURI: "contracturi/",
      })

    const dealWithEther = (price) => {
    if (price === "") {
        return 0
    }
    return utils.parseEther(price)
    }

    const { chain } = useNetwork()

  // connect to network and call create drop flow (for when no wallet previously connected)
  const { connectAsync: connectToRinkeby } = useConnect({
    connector: new InjectedConnector,
    chainId: 4,
    onSettled(data, error, variables, context) {
      console.log("connect to mainnet settled: ", data)
    },
  })
    // createDrop function used in button
    const createDropRinkeby = () => {
        if (!chain ) {
        connectToRinkebyAndDrop()
        return
        } else if (chain && chain.id !== 4) {
        switchToRinkebyAndDrop()
        return
        }
        rinkebyDropWrite()
    }
    const connectToRinkebyAndDrop = async () => {
        await connectToRinkeby()
        rinkebyDropWrite()
      }
      
        // switch network and call create drop flow (for when wallet already connected but to incorrect network)
  const { data: rinkebyChainData, switchNetworkAsync: switchToRinkeby } = useSwitchNetwork({
    chainId: 4,
    onSuccess(rinkebyChainData) {
      console.log("Success", rinkebyChainData)
    }
  })

  const switchToRinkebyAndDrop = async () => {
    await switchToRinkeby()
    rinkebyDropWrite()
  }

  const { data: rinkebyDropData, isError: rinkebyDropError, isLoading: rinkebyDropLoading, write: rinkebyDropWrite } = useContractWrite({
    addressOrName: ZoraNFTCreatorProxy_ADDRESS_RINKEBY,
    contractInterface: ZoraNFTCreatorProxy_ABI.abi,
    functionName: 'createDrop',
    args: [
      dropInputs.contractName,
      dropInputs.contractSymbol,
      dropInputs.contractAdmin,
      dropInputs.contractMaxSupply,
      dropInputs.secondaryRoyalties,
      dropInputs.fundsRecipient,
      [
        dealWithEther(dropInputs.salesConfig.priceEther),
        dropInputs.salesConfig.perWalletMintCap,
        dropInputs.salesConfig.publicSaleStart,
        dropInputs.salesConfig.publicSaleEnd,
        dropInputs.salesConfig.presaleStart,
        dropInputs.salesConfig.presaleEnd,
        dropInputs.salesConfig.presaleMerkleRoot
      ],
      dropInputs.metadataURIBase,
      dropInputs.metadtaContractURI,
    ]
  })

  useEffect(() => {
    if(!chain) {
      console.log("no wallet connected")
    } else {
      console.log("chain ID =", chain.id)
    }},
    [chain]
  )

  return (
    <div className=" sm:w-6/12 sm:h-full w-full h-6/12 flex flex-row flex-wrap content-start">
    <div className="mt-20 sm:mt-10 flex flex-row justify-center h-fit w-full border-2 border-solid border-red-500 ">
      CREATE DROP
    </div>                
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center ">
          CONTRACT NAME
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="text"
          value={dropInputs.contractName}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  contractName: e.target.value
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center">
          CONTRACT SYMBOL
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="text"
          value={dropInputs.contractSymbol}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  contractSymbol: e.target.value
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center">
          CONTRACT ADMIN
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="text"
          value={dropInputs.contractAdmin}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  contractAdmin: e.target.value
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center">
          CONTRACT MAX SUPPLY
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="number"
          value={dropInputs.contractMaxSupply}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  contractMaxSupply: e.target.value
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>                    
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center">
          SECONDARY ROYALTIES
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="number"
          value={dropInputs.secondaryRoyalties}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  secondaryRoyalties: e.target.value
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center">
          FUNDS RECIPIENT
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="text"
          value={dropInputs.fundsRecipient}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  fundsRecipient: e.target.value
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center">
          PRICE PER MINT
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="number"
          value={dropInputs.salesConfig.priceEther}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  salesConfig: {
                    ...current.salesConfig,
                    priceEther: e.target.value
                  }                        
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center">
          MINT CAP PER WALLET
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="number"
          value={dropInputs.salesConfig.perWalletMintCap}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  salesConfig: {
                    ...current.salesConfig,
                    perWalletMintCap: e.target.value
                  }                        
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center">
          PUBLIC SALE START
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="number"
          value={dropInputs.salesConfig.publicSaleStart}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  salesConfig: {
                    ...current.salesConfig,
                    publicSaleStart: e.target.value
                  }                        
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center">
          PUBLIC SALE END
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="number"
          value={dropInputs.salesConfig.publicSaleEnd}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  salesConfig: {
                    ...current.salesConfig,
                    publicSaleEnd: e.target.value
                  }                        
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center">
          PRESALE START
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="number"
          value={dropInputs.salesConfig.presaleStart}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  salesConfig: {
                    ...current.salesConfig,
                    presaleStart: e.target.value
                  }                        
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>                 
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center">
          PRESALE END
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="number"
          value={dropInputs.salesConfig.presaleEnd}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  salesConfig: {
                    ...current.salesConfig,
                    presaleEnd: e.target.value
                  }                        
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center">
          PRESALE MERKLE ROOT
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="text"
          value={dropInputs.salesConfig.presaleMerkleRoot}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  salesConfig: {
                    ...current.salesConfig,
                    presaleMerkleRoot: e.target.value
                  }                        
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>                                                                                                                     
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center">
          URI BASE
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="text"
          value={dropInputs.metadataURIBase}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  metadataURIBase: e.target.value
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className="flex flex-row w-full justify-center grid grid-cols-3">
        <div className="text-center">
          CONTRACT URI
        </div>
        <input
          className="text-black text-center bg-slate-200"
          placeholder="Input NFT Address"
          name="inputContract"
          type="text"
          value={dropInputs.metadtaContractURI}
          onChange={(e) => {
              e.preventDefault();
              setDropInputs(current => {
                return {
                  ...current,
                  metadtaContractURI: e.target.value
                }
              })
          }}
          required                    
        >
        </input>
        <button>
          HOVER FOR INFO
        </button>
      </div>            
    </div>
    <div className="flex flex-row justify-center w-full h-fit border-2 border-white border-solid">
      <div className=" grid grid-cols-3">
        <div className=" text-center col-start-2 col-end-3">
        {"symmetricality issues"}
        </div>
      </div>
    </div>          
    <div className="flex flex-row justify-center w-full h-fit border-2 border-red-500 border-solid">
      <button
        className="border-2 hover:bg-white hover:text-black border-solid border-red-500 py-1 flex flex-row w-full justify-center"
        onClick={() => createDropRinkeby()}
      >
        DEPLOY TO RINKEBY
      </button>
    </div>                   
  </div>
  )
}

export default CreateDrop;