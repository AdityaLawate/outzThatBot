require('dotenv').config()
const { Client, IntentsBitField } = require('discord.js')

const client = new Client(
    {
        intents: [
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildMessages,
            IntentsBitField.Flags.GuildMembers,
            IntentsBitField.Flags.MessageContent,
        ]
    }
)
client.on('ready',
    (c) => {
        console.log(`✅ ${c.user.username}Bot is up!!!!`)
    }
)
client.on('messageCreate',
    (message) => {
        if (message.author.bot)
            return;
        if (message.content === 'Hi') {
            message.reply('Hi')
        }
        else if (message.content === 'How are you?') {
            message.reply('Hi, Im good')
        }
    }
)

client.on('interactionCreate',
    (interaction) => {
        if (!interaction.isChatInputCommand()) return;
        switch (interaction.commandName) {
            case 'hey':
                interaction.reply('Hi!')
                break;
            case 'ping':
                interaction.reply('Pong 🎾')
                break;
            case 'out':
                interaction.reply('🏏 OutsThat!!')
                break;
            case 'score':
                interaction.reply('Fetching latest scores...!!')
                break;
            case 'add':
                const num1 = interaction.options.get('a-number').value;
                const num2 = interaction.options.get('another-number').value;
                const sum = num1 + num2;
                // interaction.
                interaction.reply(`${num1}+${num2}=${sum}`)
                break;
            default:
                break;
        }
    })

client.login(process.env.TOKEN)


