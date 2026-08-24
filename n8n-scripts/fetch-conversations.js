const client = $input.first().json;
const allConversations = [];
let page = 1;
let hasMore = true;

while (hasMore) {
  try {
    const url = `https://1048674045.chatwoot.com/api/v1/accounts/1/conversations?inbox_id=${client.inbox_id}&created_since=${client.date_from}T00:00:00.000Z&page=${page}`;
    const response = await this.helpers.httpRequest({
      method: 'GET',
      url,
      headers: { 'api_access_token': client.api_token },
      returnFullResponse: true
    });
    const payload = response.body?.payload || [];
    allConversations.push(...payload);
    hasMore = payload.length === 30;
    page++;
  } catch (e) {
    hasMore = false;
  }
}

return [{ json: { ...client, allConversations } }];
