/**
 * @fileoverview Module fetch record counts query result from mongodb
 * @author maxsam125@google.com (Maksym Samoilenko)
 */
const mongoose = require('mongoose');
module.exports = {
    recordCount: async (req, res) => {
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        const minCount = req.body.minCount;
        const maxCount = req.body.maxCount;
        try {
            const result = await mongoose.model("Record").aggregate([
                { $match: { createdAt: { "$gte": new Date(startDate), "$lte": new Date(endDate) } } },
                { $project: { key: 1, createdAt: { "$dateToString": { "date": "$createdAt" } }, _id: 0, totalCount: { "$sum": "$counts" } } },
                { $match: { totalCount: { "$gte": minCount, "$lte": maxCount } } }
            ]).exec();
            return res.json({ "code": 0, "msg": "Success", record: result });
        }
        catch (error) {
            return res.status(500).json({ code: 500, msg: error });
        }
    }
}