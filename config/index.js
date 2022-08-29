export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx26e07fe10d15eb25",
    // 公众号APP_SECRET
    APP_SECRET: "35777272a02a1a0ca768cde8fd7ee107",
    // 模板消息id
    TEMPLATE_ID: "PtLO92knl84Wr6tZW6UAwZd9x4IiWRG40Kfot_cQwOM",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["o1pes5wJFnzLDpGF4eKDH8XLIOPc"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "河南",
    // 所在城市
    CITY: "新乡",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "宝贝老公", "year": "2002", "date": "01-05"},
      {"name": "宝贝老婆", "year": "2002", "date": "09-11"},
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2022-03-08",
    


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: "小说"


    }

// {{date.DATA}}  
// 🏳‍🌈城市：{{city.DATA}}  
// 🎱天气：{{weather.DATA}}  
// 🥕最低气温: {{min_temperature.DATA}}  
// ✨最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱💕的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
