function checkCashRegister(price, cash, cid) {
    const CASH_MAP = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    let totalCash = 0;
    for (let drawer of cid) {
        totalCash += drawer[1];
    }

    let changeDue = cash - price;

    if (changeDue > totalCash) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (changeDue == totalCash) {
        return { status: "CLOSED", change: cid };
    } 

    const change = [];

    for (let i = cid.length - 1; i >= 0; i--) {
        let wallet = [cid[i][0], 0];

        while (cid[i][1] > 0 && changeDue >= CASH_MAP[cid[i][0]]) {
            cid[i][1] -= CASH_MAP[cid[i][0]];
            changeDue -= CASH_MAP[cid[i][0]];
            changeDue = changeDue.toFixed(2);
            wallet[1] += CASH_MAP[cid[i][0]];
        }

        if (wallet[1] > 0) {
            change.push(wallet);
        }
    }

    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: change };
}
