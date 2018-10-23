<template> 
    <footer>          
        <h4> 
            A Monti Product
        </h4>
        <links>
            <item>
                <a target="_blank" href="https://monti.finance">
                About
                </a>
            </item>
            <sep/>  
            <item>
                <a target="_blank" href="https://testnet.monti.finance">
               Margin
                </a>
            </item>
              
        </links>
        <copy>&#169; 2018 </copy>
    </footer>
    

</template>

<script>
import LocalChanger from './LocaleChanger';

export default {
  name: 'Footer',
  props: [],
  components: { LocalChanger },
  methods: {
    setLocale(locale) {
      this.$router.push({ path: `/${locale}` })
    }
  },
  computed: {
    conversion() {
      const { vet, vtho } = this.prices;
      let vthoPrice = (vet / vtho).toFixed(2);

      return vthoPrice;
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  background: linear-gradient(35deg,#002fca,#1875ff);
  height:8rem;

  @media all and (max-width: 768px) {
    .inner-container {
      margin: 0;
    }
  }
}

footer {
  align-items: center;
  justify-content: center;
  align-content: flex-start;
  flex-direction: column;
  text-align: center;
  height: 6rem;
  color: #fff;
  display: flex;
  background: linear-gradient(35deg,#002fca,#1875ff);
}

h4{
    margin: 0;
}
copy{
    font-size: 0.6rem;
    position: relative;
    top:0.3rem;
}
h1 {
  color: #fff;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 5px;
  margin: 0;
  text-transform: uppercase;

  @media all and (max-width: 768px) {
    font-size: 1.35rem;
  }
}
links{
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    
  
}
item{
    a{
        color:white;
        text-decoration: none;
        &:hover{
            color:orange;
        }
    }
}
sep{
    margin:0.3rem; 
    width:1px; 
    
    border-right:1px solid white;
}
.languages {
  display: flex;
  font-size: 0.8rem;

  span {
    cursor: pointer;

    &:first-of-type {
      &::after {
        color: #fff;
        content: "|";
        margin: 0 10px;
      }
    }

    &:hover {
      color: #000000;
    }
  }
}
</style>
