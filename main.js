const Main = {
  init: function () {
    this.cacheSelectors();
    this.bindEvents();
  },
  cacheSelectors: function () {
    //selecionar os elementos html e salva em variaveis
    this.$checkButtons = document.querySelectorAll('.check');
    this.$removeButtons = document.querySelectorAll('.remove');
    this.$inputTask = document.querySelector('#inputTask');
    this.$list = document.querySelector('#list');
  },
  bindEvents: function () {
    //eventos de js em geral
    const self = this;
    this.$checkButtons.forEach(function (button) {
      button.onclick = self.Events.CheckButton_click;
    });
    this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this);
    this.$removeButtons.forEach(function (button) {
      button.onclick = self.Events.RemoveButton_click;
    });
  },
  Events: {
    CheckButton_click: function (e) {
      const li = e.target.parentElement;
      li.classList.toggle('done');
      /* const isDone = li.classList.contains('done');
      if (!isDone) {
        return li.classList.add('done');
      }
      li.classList.remove('done');*/
    },

    inputTask_keypress: function (e) {
      const key = e.key;
      const value = e.target.value;
      if (key === 'Enter') {
        this.$list.innerHTML += `
          <li>
            <div class="check"></div>
            <label class="task">${value}</label>
            <button class="remove"></button>
          </li>
        `;
        e.target.value = '';
        this.cacheSelectors();
        this.bindEvents();
      }
    },
    RemoveButton_click: function (e) {
      const li = e.target.parentElement;
      li.classList.add('removed');
      setTimeout(() => {
        li.remove();
      }, 300);
    },
  },
};

Main.init();
