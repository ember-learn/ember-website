export default function () {
  this.get('https://s3.amazonaws.com/builds.emberjs.com/canary.json', () => {
    return {
      version: '3.25.0-canary+635799d4',
      buildType: 'canary',
      SHA: '635799d425f1abfa0d4bdf6704b8a08bb1a741c5',
      assetPath: '/canary/shas/635799d425f1abfa0d4bdf6704b8a08bb1a741c5.tgz',
    };
  });

  this.passthrough();
}
