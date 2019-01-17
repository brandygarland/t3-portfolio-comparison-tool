import { colors } from "../common/colors";

export interface IModelData{
    symbol: string;
    cusip: string;
    weight: string;
    color: string;
}

export const conservativeModel: IModelData[] = [
    {symbol: "VXUS", cusip: "", weight: "0", color: colors.breakerBay},
    {symbol: "IJR", cusip: "", weight: "10", color: colors.lightForestGreen},
    {symbol: "SPY", cusip: "", weight: "10", color: colors.summerGreen},
    {symbol: "VYM", cusip: "", weight: "0", color: colors.morningGlory},
    {symbol: "SGYAX", cusip: "", weight: "0", color: colors.lightBlue},
    {symbol: "IBMK", cusip: "", weight: "25", color: colors.shakespeare},
    {symbol: "BND", cusip: "", weight: "30", color: colors.denim},
    {symbol: "XLK", cusip: "", weight: "0", color: colors.midnightBlue},
    {symbol: "SCHH", cusip: "", weight: "0", color: colors.purple},
    {symbol: "CDs", cusip: "", weight: "25", color: colors.trueViolet},
    {symbol: "Commodities", cusip: "", weight: "0", color: colors.melrose},
]

export const moderateModel: IModelData[] = [
    {symbol: "VXUS", cusip: "", weight: "10", color: colors.breakerBay},
    {symbol: "IJR", cusip: "", weight: "20", color: colors.lightForestGreen},
    {symbol: "SPY", cusip: "", weight: "20", color: colors.summerGreen},
    {symbol: "VYM", cusip: "", weight: "0", color: colors.morningGlory},
    {symbol: "SGYAX", cusip: "", weight: "10", color: colors.lightBlue},
    {symbol: "IBMK", cusip: "", weight: "10", color: colors.shakespeare},
    {symbol: "BND", cusip: "", weight: "10", color: colors.denim},
    {symbol: "XLK", cusip: "", weight: "0", color: colors.midnightBlue},
    {symbol: "SCHH", cusip: "", weight: "10", color: colors.purple},
    {symbol: "CDs", cusip: "", weight: "10", color: colors.trueViolet},
    {symbol: "Commodities", cusip: "", weight: "10", color: colors.melrose},
]

export const aggressiveModel: IModelData[]  = [
    {symbol: "VXUS", cusip: "", weight: "15", color: colors.breakerBay},
    {symbol: "IJR", cusip: "", weight: "30", color: colors.lightForestGreen},
    {symbol: "SPY", cusip: "", weight: "10", color: colors.summerGreen},
    {symbol: "VYM", cusip: "", weight: "0", color: colors.morningGlory},
    {symbol: "SGYAX", cusip: "", weight: "0", color: colors.lightBlue},
    {symbol: "IBMK", cusip: "", weight: "5", color: colors.shakespeare},
    {symbol: "BND", cusip: "", weight: "5", color: colors.denim},
    {symbol: "XLK", cusip: "", weight: "15", color: colors.midnightBlue},
    {symbol: "SCHH", cusip: "", weight: "15", color: colors.purple},
    {symbol: "CDs", cusip: "", weight: "5", color: colors.trueViolet},
    {symbol: "Commodities", cusip: "", weight: "0", color: colors.melrose},
]

export const incomeModel: IModelData[] = [
    {symbol: "VXUS", cusip: "", weight: "5", color: colors.breakerBay},
    {symbol: "IJR", cusip: "", weight: "5", color: colors.lightForestGreen},
    {symbol: "SPY", cusip: "", weight: "15", color: colors.summerGreen},
    {symbol: "VYM", cusip: "", weight: "40", color: colors.morningGlory},
    {symbol: "SGYAX", cusip: "", weight: "20", color: colors.lightBlue},
    {symbol: "IBMK", cusip: "", weight: "0", color: colors.shakespeare},
    {symbol: "BND", cusip: "", weight: "0", color: colors.denim},
    {symbol: "XLK", cusip: "", weight: "0", color: colors.midnightBlue},
    {symbol: "SCHH", cusip: "", weight: "15", color: colors.purple},
    {symbol: "CDs", cusip: "", weight: "0", color: colors.trueViolet},
    {symbol: "Commodities", cusip: "", weight: "0", color: colors.melrose},
]

export const growthModel: IModelData[]  = [
    {symbol: "VXUS", cusip: "", weight: "20", color: colors.breakerBay},
    {symbol: "IJR", cusip: "", weight: "20", color: colors.lightForestGreen},
    {symbol: "SPY", cusip: "", weight: "30", color: colors.summerGreen},
    {symbol: "VYM", cusip: "", weight: "30", color: colors.morningGlory},
    {symbol: "SGYAX", cusip: "", weight: "20", color: colors.lightBlue},
    {symbol: "IBMK", cusip: "", weight: "0", color: colors.shakespeare},
    {symbol: "BND", cusip: "", weight: "0", color: colors.denim},
    {symbol: "XLK", cusip: "", weight: "40", color: colors.midnightBlue},
    {symbol: "SCHH", cusip: "", weight: "20", color: colors.purple},
    {symbol: "CDs", cusip: "", weight: "0", color: colors.trueViolet},
    {symbol: "Commodities", cusip: "", weight: "0", color: colors.melrose},
]

export const models = {
    conservative: [
        ...conservativeModel
    ],
    moderate: [
        ...moderateModel,
    ], 
    aggressive: [
        ...aggressiveModel,
    ],
    income: [
        ...incomeModel,
    ],
    growth: [
        ...growthModel,
    ],

}  

export const mapModelToPieChart = (modelArray: IModelData[]) => {
    const pieChartData = []
    modelArray.map((modelVal) => {
        const pieChartDatum = {
            title: modelVal.symbol,
            value: Number(modelVal.weight),
            color: modelVal.color
        }
        pieChartData.push(pieChartDatum)
    })
    
    return pieChartData
}