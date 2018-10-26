<template>
  <footer>
    <div class="container">
      <div class="inner-container">
        <div class="footer-content">
          <div>
            <h3>Vexchange</h3>
          </div>
          <div>
            <h5>Community</h5>
            <div class="links">
              <a href="#">Telegram Announcements</a>
              <a href="#">Telegram Chat</a>
              <a href="#">Discord</a>
            </div>
          </div>
          <div>
            <h5>Social</h5>
            <div class="links">
              <a href="#">Twitter</a>
              <a href="#">Medium</a>
              <a href="#">Github</a>
              <a href="#">ZenDesk / Email</a>
            </div>
          </div>
          <div>
            <h5>About</h5>
            <div class="links">
              <a href="#">MNT Token</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
footer {
  background: linear-gradient(-35deg,#002fca,#1875ff);
  color: #fff;
  margin-top: 64px;
  padding: 24px;
}

h3,
h5 {
  letter-spacing: 5px;
  text-transform: uppercase;
}

.footer-content {
  display: flex;
  justify-content: space-between;
}

.links {
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
}

a {
  color: #fff;
  margin-bottom: 5px;

  &:hover {
    color: red;
  }
}

</style>
