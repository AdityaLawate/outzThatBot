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
        console.log(`✅ ${c.user.tag} is up!!!!`)
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
            default:
                break;
        }
    }
)

client.login(process.env.TOKEN)


