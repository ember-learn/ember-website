import IndexEmberCommunityPhotosPhoto from 'ember-website/components/index/ember-community-photos/photo';

<template>
  <div class="homepage-image-grid">
    <div class="homepage-image-grid__scroll-wrapper">
      <IndexEmberCommunityPhotosPhoto
        @alt="Ember core team members gather around the Ember sign at EmberConf"
        @containerClass="homepage-image-grid__img-short"
        @src="/images/community/tinified/EmberConf19-13.jpg"
      />

      <IndexEmberCommunityPhotosPhoto
        @containerClass="homepage-image-grid__img-short"
        @src="/images/community/tinified/EmberConf19-112.jpg"
      />

      <IndexEmberCommunityPhotosPhoto
        @containerClass="homepage-image-grid__img-tall-bottom"
        @src="/images/community/zoey.png"
      />

      <IndexEmberCommunityPhotosPhoto
        @containerClass="homepage-image-grid__img-short"
        @src="/images/community/tinified/EmberConf19-110.jpg"
      />

      <IndexEmberCommunityPhotosPhoto
        @containerClass="homepage-image-grid__img-short"
        @src="/images/community/tinified/EmberConf19-243.jpg"
      />

      <IndexEmberCommunityPhotosPhoto
        @containerClass="homepage-image-grid__img-tall-top"
        @src="/images/community/tinified/EmberConf19-223.jpg"
      />

      <IndexEmberCommunityPhotosPhoto
        @containerClass="homepage-image-grid__img-short"
        @src="/images/community/tinified/EmberConf19-125.jpg"
      />

      <IndexEmberCommunityPhotosPhoto
        @containerClass="homepage-image-grid__img-short"
        @src="/images/community/tinified/EmberConf19-238.jpg"
      />
    </div>
  </div>
</template>
