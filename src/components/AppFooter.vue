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
              <a target="_blank" href="http://t.me/montifinance">Telegram Announcements</a>
              <a target="_blank" href="https://t.me/montichat">Telegram Chat</a>
              <a target="_blank" href="https://discord.gg/UamcJ8t">Discord</a>
            </div>
          </div>
          <div>
            <h5>Social</h5>
            <div class="links">
              <a target="_blank" href="https://twitter.com/MontiFinance">Twitter</a>
              <a target="_blank" href="https://medium.com/montifinance">Medium</a>
              <a target="_blank" href="https://github.com/Monti/">Github</a>
            </div>
          </div>
          <div>
            <h5>About</h5>
            <div class="links">
              <a href="mailto:careers@monti.finance">Careers</a>
              <a href="mailto:contact@monti.finance">Contact</a>
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
