<template>
  <footer class="footer">
    <ul>
      <li v-for="social_media in social_medias" :key="social_media.name">
        <a :href="social_media.href" target="_blank">
          <img :src="social_media.icon"
               :alt="social_media.name + '-icon'"
          />
        </a>
      </li>
    </ul>
    <div class="copyright">
      <p>&#169; {{ current_year }}</p>
    </div>
  </footer>
</template>

<script>
import LinkedinIcon from "@/assets/linkedin.svg";
import GithubIcon from "@/assets/github.svg";
import FacebookIcon from "@/assets/facebook.svg";

export default {
  name: "TheFooter",

  data() {
    return {
      current_year: new Date().getFullYear(),

      social_medias: [
        {
          name: "Linkedin",
          href: "https://www.linkedin.com/in/hovhannes-keshishyan",
          icon: LinkedinIcon,
        },
        {
          name: "Github",
          href: "https://github.com/HovhannesKeshishyan",
          icon: GithubIcon,
        },
        {
          name: "Facebook",
          href: "https://www.facebook.com/HovoKeshishyan",
          icon: FacebookIcon,
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/styles/colors";

.footer {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100px;
  background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  gap: 3rem;

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    li {
      list-style: none;
      cursor: pointer;
      font-size: 2.4rem;
      height: 4rem;

      img {
        width: 4rem;
        height: 4rem;
      }

      &:hover {
        color: colors.$orange;
      }
    }
  }

  .copyright {
    font-size: 2.4rem;
    transition: color 0.5s ease-in-out;

    &:hover {
      color: colors.$orange;
    }
  }
}
</style>