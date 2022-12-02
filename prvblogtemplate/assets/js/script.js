const loadMore = document.querySelector("#botao-mais");

const users = [];

const useBasePostsUrl = `https://6388fbf0a4bb27a7f796c4f7.mockapi.io/user`
  const ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const users = JSON.parse(this.responseText);
      users.map((user) => {
        console.log(user)
        users.push(user)
      })
      getUsersPosts(users);
    } else {
      console.log("Erro: " + this.status);
    }
  };
  ajax.open("GET", useBasePostsUrl, true);
  ajax.send();

const getUsersPosts = () => {
  const useBasePostsUrl = `https://6388fbf0a4bb27a7f796c4f7.mockapi.io/user`
  const ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const users = JSON.parse(this.responseText);
      getUsersPosts();
      users.map((user) => {
        console.log(user)
        users.push(user)
      })
    } else {
      console.log("Erro: " + this.status);
    }
  };
  ajax.open("GET", useBasePostsUrl, true);
  ajax.send();
console.log(users)
}

$("#botao-mais").click(mostraMais);

function mostraMais() {
    $(".texto").toggle();
    if($("#botao-mais").text() === 'Carregar mais') {
        $("#botao-mais").text('Carregar menos')
      } else {
        $("#botao-mais").text('Carregar mais')
      }
};

loadMore.addEventListener("click", (e) => {
  e.preventDefault();
  loadMoreInformation();
});

/*
edit1
const useBasePostsUrl = `https://6388fbf0a4bb27a7f796c4f7.mockapi.io/user/`
  const ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const users = JSON.parse(this.responseText);
      users.map((user) => {
        console.log(user)
        users.push(user)
      })
      getUsersPosts(users);
    } else {
      console.log("Erro: " + this.status);
    }
  };
  ajax.open("GET", useBasePostsUrl, true);
  ajax.send();

const getUsersPosts = () => {
  const useBasePostsUrl = `https://6388fbf0a4bb27a7f796c4f7.mockapi.io/user`
  const ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const users = JSON.parse(this.responseText);
      getUsersPosts();
      users.map((user) => {
        console.log(user)
        users.push(user)
      })
    } else {
      console.log("Erro: " + this.status);
    }
  };
  ajax.open("GET", useBasePostsUrl, true);
  ajax.send();
console.log(users)
}

$("#botao-mais").click(mostraMais);

function mostraMais() {
    $(".texto").toggle();
    if($("#botao-mais").text() === 'Carregar mais') {
        $("#botao-mais").text('Carregar menos')
      } else {
        $("#botao-mais").text('Carregar mais')
      }
};

loadMore.addEventListener("click", (e) => {
  e.preventDefault();
  loadMoreInformation();
});


-------------------------------------------
========================
edit2

const loadMore = document.querySelector("#botao-mais");

const users = [];

const useBasePostsUrl = `https://6388fbf0a4bb27a7f796c4f7.mockapi.io/user`
  const ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const users = JSON.parse(this.responseText);
      users.map((user) => {
        console.log(user)
        users.push(user)
      })
      getUsersPosts(users);
    } else {
      console.log("Erro: " + this.status);
    }
  };
  ajax.open("GET", useBasePostsUrl, true);
  ajax.send();

const getUsersPosts = () => {
  const useBasePostsUrl = `https://6388fbf0a4bb27a7f796c4f7.mockapi.io/user`
  const ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const users = JSON.parse(this.responseText);
      getUsersPosts();
      users.map((user) => {
        console.log(user)
        users.push(user)
      })
    } else {
      console.log("Erro: " + this.status);
    }
  };
  ajax.open("GET", useBasePostsUrl, true);
  ajax.send();
console.log(users)
}

$("#botao-mais").click(mostraMais);

function mostraMais() {
    $(".texto").toggle();
    if($("#botao-mais").text() === 'Carregar mais') {
        $("#botao-mais").text('Carregar menos')
      } else {
        $("#botao-mais").text('Carregar mais')
      }
};

loadMore.addEventListener("click", (e) => {
  e.preventDefault();
  loadMoreInformation();
});

*/