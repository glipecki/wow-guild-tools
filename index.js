const fs = require('fs');

const guild = JSON.parse(fs.readFileSync('./freshers.29052024.json', {encoding: 'utf-8'}));

const stats = guild.members
    .filter(member => member.level >= 5)
    .reduce(
        (result, member) => {
            result[member.class] = result[member.class] || 0;
            result[member.class] += 1;
            return result;
        },
        {}
    );
console.log(stats)