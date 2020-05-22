function minRewards(scores) {
  // Write your code here.
	const rewards = scores.map(_ => 1);
	for( let i = 1; i < scores.length; i++){
		let j = i - 1;
		if (scores[i] > scores[j]){
			rewards[i] = rewards[j] + 1;
		} else {
			while( j >= 0 && scores[j] > scores[j + 1]){
				rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1)
				j--;
			}
		}
	}
	return rewards.reduce((a,b) => a + b)
}