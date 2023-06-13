<template>
  <div class="search-input">
    <div class="input-wrapper">
      <input type="text" placeholder="Search" />
      <svg
        class="icon-search"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2028 9.85174C11.1006 9.74954 11.0866 9.57314 11.165 9.45134C11.781 8.50354 12.1422 7.37514 12.1422 6.16274C12.1422 2.81394 9.4178 0.0909424 6.0718 0.0909424C2.723 0.0909424 0 2.81394 0 6.16274C0 9.51014 2.723 12.2331 6.0718 12.2331C7.3752 12.2331 8.582 11.8145 9.5732 11.1117C9.6894 11.0277 9.8644 11.0389 9.9666 11.1397L12.1366 13.3097C12.1506 13.3237 12.166 13.3377 12.1814 13.3489C12.2066 13.3699 12.3116 13.4679 12.4124 13.5701L12.67 13.8263C12.7722 13.9271 12.9374 13.9271 13.0382 13.8263L13.923 12.9415C14.0252 12.8393 14.0252 12.6741 13.9244 12.5719L11.2028 9.85174ZM9.744 8.99074C9.5438 9.25114 9.3184 9.48914 9.0692 9.70054C8.26 10.3879 7.2142 10.8051 6.0718 10.8051C3.5112 10.8051 1.428 8.72194 1.428 6.16274C1.428 3.60354 3.5112 1.51894 6.0718 1.51894C8.631 1.51894 10.7142 3.60214 10.7142 6.16274C10.7142 7.22674 10.3488 8.20674 9.744 8.99074Z"
          fill="#CACCCF"
        />
      </svg>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.search-input {
  .input-wrapper {
    position: relative;
    input {
      background: #ffffff;
      border-radius: 100px;
      font-family: Mulish, sans-serif;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: 0.1px;
      padding: 12px 16px 12px 42px;
      width: 350px;
      border: 1px solid #f6f8fb;
      outline: none;
    }
    input:focus {
      box-shadow: 0px 12px 26px rgba(16, 29, 115, 0.116);
    }
    .icon-search {
      position: absolute;
      top: 15px;
      left: 16px;
    }
  }
}
</style>
