export default {"abi":{"ABI version":2,"header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"tokenRoot","type":"address"}],"outputs":[]},{"name":"initPadawan","inputs":[{"name":"ownerAddress","type":"address"}],"outputs":[]},{"name":"voteFor","inputs":[{"name":"proposal","type":"address"},{"name":"choice","type":"bool"},{"name":"votes","type":"uint32"}],"outputs":[]},{"name":"confirmVote","inputs":[{"name":"pid","type":"uint64"},{"name":"deposit","type":"uint32"}],"outputs":[]},{"name":"rejectVote","inputs":[{"name":"pid","type":"uint64"},{"name":"deposit","type":"uint32"},{"name":"ec","type":"uint16"}],"outputs":[]},{"name":"reclaimDeposit","inputs":[{"name":"votes","type":"uint32"}],"outputs":[]},{"name":"updateStatus","inputs":[{"name":"pid","type":"uint64"},{"name":"state","type":"uint8"}],"outputs":[]},{"name":"transferFunds","inputs":[{"name":"to","type":"address"},{"name":"val","type":"uint128"}],"outputs":[]},{"name":"depositTokens","inputs":[{"name":"returnTo","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"tokens","type":"uint64"}],"outputs":[]},{"name":"onGetBalance","inputs":[{"name":"balance","type":"uint128"}],"outputs":[]},{"name":"onTokenWalletDeploy","inputs":[{"name":"ownerAddress","type":"address"}],"outputs":[]},{"name":"getDeposits","inputs":[],"outputs":[{"components":[{"name":"tokenId","type":"uint256"},{"name":"returnTo","type":"address"},{"name":"amount","type":"uint64"},{"name":"valuePerVote","type":"uint64"},{"name":"approved","type":"bool"},{"name":"depool","type":"uint256"}],"name":"allDeposits","type":"map(uint32,tuple)"}]},{"name":"getTokenAccounts","inputs":[],"outputs":[{"components":[{"name":"addr","type":"address"},{"name":"ownerAddressKey","type":"uint256"},{"name":"createdAt","type":"uint32"},{"name":"balance","type":"uint128"}],"name":"allAccounts","type":"map(address,tuple)"}]},{"name":"getVoteInfo","inputs":[],"outputs":[{"name":"reqVotes","type":"uint32"},{"name":"totalVotes","type":"uint32"},{"name":"lockedVotes","type":"uint32"}]},{"name":"getAddresses","inputs":[],"outputs":[{"name":"ownerAddress","type":"address"}]},{"name":"getActiveProposals","inputs":[],"outputs":[{"name":"activeProposals","type":"map(address,uint32)"}]}],"data":[{"key":1,"name":"deployer","type":"address"}],"events":[{"name":"VoteRejected","inputs":[{"name":"pid","type":"uint64"},{"name":"votes","type":"uint32"},{"name":"ec","type":"uint16"}],"outputs":[]}]},"image":"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"}