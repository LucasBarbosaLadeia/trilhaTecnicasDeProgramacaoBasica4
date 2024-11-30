
//problema denovo
abstract class VoteSystem {
    protected votes: Record<string, number>;

    constructor() {
        this.votes = {};
    }
    abstract voteFor(candidate: string): void 
    abstract getResults(): object
}

class Election extends VoteSystem {
    voteFor(candidate: string): void {
        if(!candidate)
            return;
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
    getResults(): object {
        return {...this.votes}; 
    }
}

class Poll extends VoteSystem {
    
 voteFor(candidate: string): void {
        if(!candidate)
            return;
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
    


getResults(): object {

    return Object.entries(this.votes)
        .sort(([, votesA], [, votesB]) => votesB - votesA)
        .map(([candidate, votes]) => ({ candidate, votes }));

}
}

const election = new Election();
election.voteFor("Alice");
election.voteFor("Bob");
election.voteFor("Alice");
console.log("Resultados da eleição:", election.getResults());

// Enquete
const poll = new Poll();
poll.voteFor("Gatos");
poll.voteFor("Cachorros");
poll.voteFor("Cachorros");
poll.voteFor("Pássaros");
console.log("Resultados da enquete:", poll.getResults());