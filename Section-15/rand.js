function whosPaying(names) {
        index = names.length;
        rand = Math.random() * (index);
        rand = Math.floor(rand);
        return names[rand]+" is going to buy lunch today!";
    }