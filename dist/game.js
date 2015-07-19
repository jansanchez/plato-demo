
/*
Modulo para crear los metodos de animacion de aladino
@class aladino
@main my_module/game
@author
 */
yOSON.AppCore.addModule("aladino", function(Sb) {
  var catchDom, defaults, dom, events, fn, initialize, interval, st, suscribeEvents;
  defaults = {
    parent: '.box_game',
    el: '.aladino',
    bgPosition: 'background-position',
    movements: [4, 11],
    trace: '',
    indice: 0,
    prefixClass: 'running_',
    time: 120,
    runId: null
  };
  st = {};
  dom = {};
  interval = null;
  catchDom = function() {
    dom.parent = $(st.parent);
    dom.el = $(st.el, dom.parent);
  };
  suscribeEvents = function() {
    dom.el.on('click', events.stopRun);
  };
  events = {
    stopRun: function() {
      fn.stopRun();
    }
  };
  fn = {
    run: function() {
      var classAdd;
      classAdd = '';
      st.indice = st.movements[0];
      st.runId = setInterval(function() {
        var classRemove;
        if (st.indice === st.movements[1]) {
          st.indice = st.movements[0];
          classRemove = st.prefixClass + st.movements[1];
        } else {
          classRemove = st.prefixClass + st.indice;
        }
        classAdd = st.prefixClass + (st.indice + 1);
        dom.el.removeClass(classRemove).addClass(classAdd);
        st.indice++;
      }, st.time);
    },
    stopRun: function() {
      clearInterval(st.runId);
    }
  };
  initialize = function(opts) {
    st = $.extend({}, defaults, opts);
    catchDom();
    suscribeEvents();
    fn.run();
  };
  return {
    init: initialize
  };
}, []);


/*
Modulo para contar los segundos transcurridos desde que aladino comenzo a correr
@class timer
@main my_module/game
@author
 */
yOSON.AppCore.addModule("timer", function(Sb) {
  var catchDom, defaults, dom, events, fn, initialize, interval, st, suscribeEvents;
  defaults = {
    parent: '.box_game',
    el: '.timer',
    time: 1000,
    elapsed_time: 0,
    timeInterval: 0
  };
  st = {};
  dom = {};
  interval = null;
  catchDom = function() {
    dom.parent = $(st.parent);
    dom.el = $(st.el, dom.parent);
  };
  suscribeEvents = function() {};
  events = {};
  fn = {
    start: function() {
      st.timeInterval = st.time / st.time;
      interval = setInterval(function() {
        st.elapsed_time = st.elapsed_time + st.timeInterval;
        return fn.showTime(st.elapsed_time);
      }, st.time);
    },
    showTime: function(currentTime) {
      dom.el.html(currentTime);
    }
  };
  initialize = function(opts) {
    st = $.extend({}, defaults, opts);
    catchDom();
    suscribeEvents();
    fn.start();
  };
  return {
    init: initialize
  };
}, []);
