import { colors } from "../common/colors";

export interface IModelData{
    symbol: string;
    cusip: string;
    weight: string;
    color: string;
}

export const conservativeModel: IModelData[] = [
    {symbol: "VXUS", cusip: "921909768", weight: "0", color: colors.breakerBay},
    {symbol: "IJR", cusip: "464287804", weight: "10", color: colors.lightForestGreen},
    {symbol: "SPY", cusip: "78462F103", weight: "10", color: colors.summerGreen},
    {symbol: "VYM", cusip: "921946406", weight: "0", color: colors.morningGlory},
    {symbol: "SGYAX", cusip: "783980303", weight: "0", color: colors.lightBlue},
    {symbol: "IBMK", cusip: "46435G755", weight: "25", color: colors.shakespeare},
    {symbol: "BND", cusip: "921937835", weight: "30", color: colors.denim},
    {symbol: "XLK", cusip: "81369Y803", weight: "0", color: colors.midnightBlue},
    {symbol: "SCHH", cusip: "808524847", weight: "0", color: colors.purple},
    {symbol: "CDs", cusip: "CASH$    ", weight: "25", color: colors.trueViolet},
    {symbol: "Commodities", cusip: "46138B103", weight: "0", color: colors.melrose},
]

export const moderateModel: IModelData[] = [
    {symbol: "VXUS", cusip: "921909768", weight: "10", color: colors.breakerBay},
    {symbol: "IJR", cusip: "464287804", weight: "20", color: colors.lightForestGreen},
    {symbol: "SPY", cusip: "78462F103", weight: "20", color: colors.summerGreen},
    {symbol: "VYM", cusip: "921946406", weight: "0", color: colors.morningGlory},
    {symbol: "SGYAX", cusip: "783980303", weight: "10", color: colors.lightBlue},
    {symbol: "IBMK", cusip: "46435G755", weight: "10", color: colors.shakespeare},
    {symbol: "BND", cusip: "921937835", weight: "10", color: colors.denim},
    {symbol: "XLK", cusip: "81369Y803", weight: "0", color: colors.midnightBlue},
    {symbol: "SCHH", cusip: "808524847", weight: "10", color: colors.purple},
    {symbol: "CDs", cusip: "CASH$    ", weight: "10", color: colors.trueViolet},
    {symbol: "Commodities", cusip: "46138B103", weight: "10", color: colors.melrose},
]

export const aggressiveModel: IModelData[]  = [
    {symbol: "VXUS", cusip: "921909768", weight: "15", color: colors.breakerBay},
    {symbol: "IJR", cusip: "464287804", weight: "30", color: colors.lightForestGreen},
    {symbol: "SPY", cusip: "78462F103", weight: "10", color: colors.summerGreen},
    {symbol: "VYM", cusip: "921946406", weight: "0", color: colors.morningGlory},
    {symbol: "SGYAX", cusip: "783980303", weight: "0", color: colors.lightBlue},
    {symbol: "IBMK", cusip: "46435G755", weight: "5", color: colors.shakespeare},
    {symbol: "BND", cusip: "921937835", weight: "5", color: colors.denim},
    {symbol: "XLK", cusip: "81369Y803", weight: "15", color: colors.midnightBlue},
    {symbol: "SCHH", cusip: "808524847", weight: "15", color: colors.purple},
    {symbol: "CDs", cusip: "CASH$    ", weight: "5", color: colors.trueViolet},
    {symbol: "Commodities", cusip: "46138B103", weight: "0", color: colors.melrose},
]

export const incomeModel: IModelData[] = [
    {symbol: "VXUS", cusip: "921909768", weight: "5", color: colors.breakerBay},
    {symbol: "IJR", cusip: "464287804", weight: "5", color: colors.lightForestGreen},
    {symbol: "SPY", cusip: "78462F103", weight: "15", color: colors.summerGreen},
    {symbol: "VYM", cusip: "921946406", weight: "40", color: colors.morningGlory},
    {symbol: "SGYAX", cusip: "783980303", weight: "20", color: colors.lightBlue},
    {symbol: "IBMK", cusip: "46435G755", weight: "0", color: colors.shakespeare},
    {symbol: "BND", cusip: "921937835", weight: "0", color: colors.denim},
    {symbol: "XLK", cusip: "81369Y803", weight: "0", color: colors.midnightBlue},
    {symbol: "SCHH", cusip: "808524847", weight: "15", color: colors.purple},
    {symbol: "CDs", cusip: "CASH$    ", weight: "0", color: colors.trueViolet},
    {symbol: "Commodities", cusip: "46138B103", weight: "0", color: colors.melrose},
]

export const growthModel: IModelData[]  = [
    {symbol: "VXUS", cusip: "921909768", weight: "20", color: colors.breakerBay},
    {symbol: "IJR", cusip: "464287804", weight: "20", color: colors.lightForestGreen},
    {symbol: "SPY", cusip: "78462F103", weight: "30", color: colors.summerGreen},
    {symbol: "VYM", cusip: "921946406", weight: "30", color: colors.morningGlory},
    {symbol: "SGYAX", cusip: "783980303", weight: "20", color: colors.lightBlue},
    {symbol: "IBMK", cusip: "46435G755", weight: "0", color: colors.shakespeare},
    {symbol: "BND", cusip: "921937835", weight: "0", color: colors.denim},
    {symbol: "XLK", cusip: "81369Y803", weight: "40", color: colors.midnightBlue},
    {symbol: "SCHH", cusip: "808524847", weight: "20", color: colors.purple},
    {symbol: "CDs", cusip: "CASH$    ", weight: "0", color: colors.trueViolet},
    {symbol: "Commodities", cusip: "46138B103", weight: "0", color: colors.melrose},
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