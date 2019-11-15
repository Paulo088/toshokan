<template>
<section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" class="box">
						<div class="field">
              <label for="" class="label">Username</label>
              <div class="control has-icons-left">
                <input type="text" placeholder="e.g. patinho" class="input" required>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
						<div class="field">
              <label for="" class="label">Confirm Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
						<div class="field">
              <label for="" class="label">Birth</label>
              <div class="control has-icons-left">
                <input type="text" placeholder="e.g. 11/12/2000" class="input" required>
              </div>
            </div>
            <div class="field">
							<button class="button is-primary">
                Cadastrar-se
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
	name: 'register'
}
</script>

<style scoped>
	section {
		background-image: url('../assets/login-fundo.jpg');
		background-attachment: fixed;
		background-position: center;
	}
</style>
