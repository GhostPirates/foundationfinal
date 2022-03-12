

# on: [push]

# jobs:
#   call-workflow:
#     uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
#     secrets:
#       access-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}

# jobs:
#   deploy_job:
#     runs-on: ubuntu-latest
#     name: deploy
#     steps:
#       - name: Checkout
#         uses: actions/checkout@v2
#       - name: DeployAction
#         uses: ../action.yml
#         with:
#           username: 'root'
#           server: 'your server ip'
#           ssh_private_key: ${{ secrets.SSH_PRIVATE_KEY }} 
#           local_path: './static/*'
#           remote_path: '/var/www/app'
#           args: '-o ConnectTimeout=5'
