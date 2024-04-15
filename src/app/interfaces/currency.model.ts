export interface ICurrency {
    ccy:             string;
    dictionaryKey:   string;
    dictionaryValue: string;
    rateWeight:      number;
    previousRate:    number;
    currentRate:     number;
    difference:      number;
    buyRate:         number;
    sellRate:        number;
    dgtlBuyRate:     number;
    dgtlSellRate:    number;
    midBuyRate:      null;
    midSellRate:     null;
    defaultCcy:      boolean;
    viewCcy:         string;
    name:            string;
    color:           string;
    symbol:          string;
}

export interface ICurrencyRoot {
    data: ICurrency[]
}

//https://app.quicktype.io/