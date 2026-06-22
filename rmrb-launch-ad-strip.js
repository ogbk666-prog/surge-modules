let body = $response.body || "";

try {
  const obj = JSON.parse(body);
  if (obj && obj.data) {
    obj.data.launchAdInfo = [];
    obj.data.launchPageInfo = null;
    obj.data.launchPageInfosV2 = [];
    if (obj.data.commons && typeof obj.data.commons === 'object') {
      obj.data.commons.adLaunchCarousel = 0;
    }
  }
  $done({ body: JSON.stringify(obj) });
} catch (error) {
  $done({ body });
}
