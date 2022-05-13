var birch = document.getElementById('birch');
        var birchdate = "2021-10-16";
var cnc1 = document.getElementById('cnc1');
        var cnc1date = "2020-10-03";
var cnc2 = document.getElementById('cnc2');
        var cnc2date = "2020-10-03";
var bio19 = document.getElementById('bio19');
        var bio19date = "2019-09-28";
var combat = document.getElementById('combat');
        var combatdate = "2019-06-26T07:17:00";
var fletch = document.getElementById('fletch');
        var fletchdate = "2019-03-13";
var bio18 = document.getElementById('bio18');
        var bio18date = "2018-09-29";
var mods = document.getElementById('mods');
        var modsdate = "2015-04-30"
var hurt = document.getElementById('hurt');
        var hurtdate = "2012-08-26"

var render = function() {
        var since = moment(birchdate).countdown().toString();
                birch.innerHTML = since;
        var since = moment(cnc1date).countdown().toString();
                cnc1.innerHTML = since;
        var since = moment(cnc2date).countdown().toString();
                cnc2.innerHTML = since;
        var since = moment(bio19date).countdown().toString();
                bio19.innerHTML = since;
        var since = moment(combatdate).countdown().toString();
                combat.innerHTML = since;
        var since = moment(fletchdate).countdown().toString();
                fletch.innerHTML = since;
        var since = moment(bio18date).countdown().toString();
                bio18.innerHTML = since;
        var since = moment(modsdate).countdown().toString();
                mods.innerHTML = since;
        var since = moment(hurtdate).countdown().toString();
                hurt.innerHTML = since;
}

render();
this.interval = setInterval(render, 1000);
