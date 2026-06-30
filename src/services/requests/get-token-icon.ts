import { TokenInfoType } from "@/entities/tokens/model";




export  const getTokenIcon = async (tokenInfo: TokenInfoType, chainId: number, tokensList, ) => {

    let image = `/default-token-icon.png`
    let logoFromApi  = null
    if(tokenInfo.address) {
        logoFromApi =  tokensList[chainId]?.[tokenInfo.address]?.logoURI 
        // get and cash coingecko info
        // ||
		// getCoingeckoImage(chainId, tokenInfo.address)
    }

    if(!logoFromApi) {
        image = `/${tokenInfo.symbol}.svg`
    }
	return image;
};
