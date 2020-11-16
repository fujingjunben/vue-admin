class Navigator {
    push(path, params = {}) {
      this.$router.push({path: path, query: params})
    }

    pushName(name, params = {}) {
      this.$router.push({name: name, params: params})
    }
}

export default new Navigator